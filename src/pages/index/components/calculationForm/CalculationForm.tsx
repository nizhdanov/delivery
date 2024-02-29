import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { Loader2, Mail, MapPin, Navigation } from 'lucide-react';
import { z } from 'zod';

import { useDeliveryCalcMutation } from '@/api/hooks/mutation';
import { useDeliveryPackageTypesQuery, useDeliveryPointsQuery } from '@/api/hooks/query';
import { IMAGES } from '@/assets';
import { BgCircleIcon } from '@/components/icons';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui';

const FormSchema = z.object({
  senderPointName: z.string({ required_error: 'Заполните город отправки' }),
  receiverPointName: z.string({ required_error: 'Заполните город назначения' }),
  packageSize: z.string({ required_error: 'Заполните размер посылки' })
  // package: z
  //   .object({
  //     name: z.string(),
  //     length: z.number(),
  //     width: z.number(),
  //     height: z.number(),
  //     weight: z.number()
  //   })
  //   .optional()
});

export const CalculationForm = () => {
  const navigate = useNavigate();
  const deliveryPointsQuery = useDeliveryPointsQuery();
  const deliveryCalcMutation = useDeliveryCalcMutation({
    options: {
      onSuccess: () =>
        navigate({
          search: {
            step: 'methodOfSending'
          }
        })
    }
  });
  const deliveryPackageTypesQuery = useDeliveryPackageTypesQuery();

  const points = deliveryPointsQuery.data?.data.points;
  const packages = deliveryPackageTypesQuery.data?.data.packages;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const {
      id: senderId,
      name: senderName,
      ...senderPoint
    } = points!.find((point) => point.name === data.senderPointName)!;

    const {
      id: receiverId,
      name: receiverName,
      ...receiverPoint
    } = points!.find((point) => point.name === data.receiverPointName)!;

    const {
      id: packageId,
      name: packageName,
      ...packageType
    } = packages!.find((packageType) => packageType.name === data.packageSize)!;

    await deliveryCalcMutation.mutateAsync({
      data: {
        package: packageType,
        receiverPoint,
        senderPoint
      }
    });
  };

  return (
    <>
      <div className='absolute bottom-0 left-0 right-0 top-0 -z-10 overflow-hidden '>
        <BgCircleIcon className='absolute left-[580px] top-[-218px] animate-move-rt ' />
        <BgCircleIcon className='absolute bottom-[-165px] left-[344px] animate-move-dc fill-[#0E43CB]' />
        <BgCircleIcon className='absolute left-[-148px] top-[-158px] animate-move-lt fill-[#CB0E16] ' />
      </div>

      <main className='flex h-full w-full items-center justify-center lg:justify-between '>
        <div className='hidden w-[448px] flex-col items-center justify-center gap-4 lg:flex'>
          <img src={IMAGES.earth} alt='earth' />
          <h2 className='text-center text-3xl font-bold text-foreground'>
            ЦФТ доставка - быстро, удобно, надежно!
          </h2>
        </div>

        <Card className='w-full max-w-lg'>
          <CardHeader className='text-center'>
            <CardTitle>Рассчитать доставку</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col items-center'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-96 space-y-6'>
                {/* Город отправки */}
                <FormField
                  control={form.control}
                  name='senderPointName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Город отправки</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <div className='flex items-center gap-1'>
                              {field.value && <MapPin className='size-5 text-muted-foreground' />}
                              <SelectValue placeholder='Выберите город для отправки' />
                            </div>
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          {points?.map((point) => (
                            <SelectItem key={point.id} value={point.name}>
                              {point.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className='flex gap-2 text-sm text-muted-foreground underline'>
                        {points?.slice(0, 3).map((point) => (
                          <button
                            key={point.id}
                            onClick={() => field.onChange(point.name)}
                            type='button'
                          >
                            {point.name}
                          </button>
                        ))}
                      </div>
                    </FormItem>
                  )}
                />

                {/* Город назначения */}
                <FormField
                  control={form.control}
                  name='receiverPointName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Город назначения</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <div className='flex items-center gap-1'>
                              {field.value && (
                                <Navigation className='size-5 text-muted-foreground' />
                              )}
                              <SelectValue placeholder='Выберите город назначения' />
                            </div>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {points?.map((point) => (
                            <SelectItem key={point.id} value={point.name}>
                              {point.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className='flex gap-2 text-sm text-muted-foreground underline'>
                        {points?.slice(0, 3).map((point) => (
                          <button
                            key={point.id}
                            onClick={() => field.onChange(point.name)}
                            type='button'
                          >
                            {point.name}
                          </button>
                        ))}
                      </div>
                    </FormItem>
                  )}
                />

                {/* Размер посылки */}
                <FormField
                  control={form.control}
                  name='packageSize'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Размер посылки</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <div className='flex items-center gap-1'>
                              {field.value && <Mail className='size-5 text-muted-foreground' />}
                              <SelectValue placeholder='Выберите размер поссылки' />
                            </div>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <Tabs defaultValue='approximate' className='w-full'>
                            <TabsList className='grid w-full grid-cols-2'>
                              <TabsTrigger value='approximate'>Примерные</TabsTrigger>
                              <TabsTrigger value='exact'>Точные</TabsTrigger>
                            </TabsList>
                            <TabsContent value='approximate'>
                              {packages?.map((pack) => (
                                <SelectItem key={pack.id} value={pack.name}>
                                  {`${pack.name}, ${pack.length}x${pack.width}x${pack.height} см, до ${pack.weight} кг`}
                                </SelectItem>
                              ))}
                            </TabsContent>
                            <TabsContent value='exact' className='flex flex-col gap-3 px-4 pb-2'>
                              {/* <FormField
                                control={form.control}
                                name='package.length'
                                render={({ field }) => (
                                  <FormItem className='flex items-center justify-between gap-8 '>
                                    <FormLabel>Длина</FormLabel>
                                    <FormControl>
                                      <Input
                                        type='number'
                                        placeholder='см'
                                        {...field}
                                        className='w-32'
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name='package.width'
                                render={({ field }) => (
                                  <FormItem className='flex items-center justify-between gap-8 '>
                                    <FormLabel>Ширина</FormLabel>
                                    <FormControl>
                                      <Input
                                        type='number'
                                        placeholder='см'
                                        {...field}
                                        className='w-32'
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name='package.height'
                                render={({ field }) => (
                                  <FormItem className='flex items-center justify-between gap-8 '>
                                    <FormLabel>Высота</FormLabel>
                                    <FormControl>
                                      <Input
                                        type='number'
                                        placeholder='см'
                                        {...field}
                                        className='w-32'
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name='package.weight'
                                render={({ field }) => (
                                  <FormItem className='flex items-center justify-between gap-8 '>
                                    <FormLabel>Вес</FormLabel>
                                    <FormControl>
                                      <Input
                                        type='number'
                                        placeholder='кг'
                                        {...field}
                                        className='w-32'
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              /> */}
                            </TabsContent>
                          </Tabs>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <Button
                  disabled={deliveryCalcMutation.isPending}
                  type='submit'
                  size='lg'
                  className='w-full gap-4'
                >
                  {deliveryCalcMutation.isPending && <Loader2 className='animate-spin ' />}
                  Рассчитать
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </>
  );
};
