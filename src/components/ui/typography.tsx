import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils/cn';

export const typographyVariants = cva('', {
  variants: {
    as: {
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-semibold leading-none tracking-tight'
    }
  }
});

export interface TypographyProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
}

export const Typography = ({ children, as, className, ...props }: TypographyProps) => {
  const styles = cn(typographyVariants({ as, className }));
  switch (as) {
    case 'h2':
      return (
        <h2 className={styles} {...props}>
          {children}
        </h2>
      );

    case 'h3':
      return (
        <h3 className={styles} {...props}>
          {children}
        </h3>
      );

    default:
      return <p className={styles}>{children}</p>;
  }
};
