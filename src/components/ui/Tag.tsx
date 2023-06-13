import { tv, type VariantProps } from 'tailwind-variants';

const tag = tv({
  base: 'rounded-full px-3 py-0.5 text-sm font-semibold capitalize',
  variants: {
    priority: {
      default: 'bg-gray-100 text-gray-500',
      low: 'bg-emerald-100 text-emerald-500',
      medium: 'bg-amber-100 text-amber-500',
      high: 'bg-red-100 text-red-500',
    },
  },
  defaultVariants: {
    priority: 'default',
  },
});

type TagVariants = VariantProps<typeof tag>;

export interface TagProps extends TagVariants {
  label: string;
  priority?: string;
}

export default function Tag({ label, priority = 'default', ...props }: TagProps) {
  const hasValidPriority = Object.keys(tag.variants.priority).includes(priority);

  return (
    <div
      className={tag({
        ...props,
        priority: hasValidPriority ? priority : 'default',
      })}>
      <p>{label}</p>
    </div>
  );
}
