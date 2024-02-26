import { IMAGES } from '@/assets';
import { BgCircleIcon } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle, Input, Label } from '@/components/ui';

export const CalculationForm = () => {
  return (
    <>
      <div className='absolute bottom-0 left-0 right-0 top-0 -z-10 overflow-hidden '>
        <BgCircleIcon className='animate-move-rt absolute left-[580px] top-[-218px] ' />
        <BgCircleIcon className='animate-move-dc absolute bottom-[-165px] left-[344px] fill-[#0E43CB]' />
        <BgCircleIcon className='animate-move-lt absolute left-[-148px] top-[-158px] fill-[#CB0E16] ' />
      </div>

      <main className='flex h-full w-full items-center justify-center lg:justify-between '>
        <div className='hidden w-[448px] flex-col items-center justify-center gap-4 lg:flex'>
          <img src={IMAGES.earth} alt='earth' className='' />
          <h2 className='text-center text-3xl font-bold text-foreground'>
            ЦФТ доставка - быстро, удобно, надежно!
          </h2>
        </div>
        <Card className='w-full max-w-lg'>
          <CardHeader>
            <CardTitle>Рассчитать доставку</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor='from'>Город отправки</Label>
            <Input type='text' id='from' placeholder='Город' />
          </CardContent>
        </Card>
      </main>
    </>
  );
};
