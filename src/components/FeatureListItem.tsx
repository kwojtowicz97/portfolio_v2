import { TFeature } from '../data'

export type TListItemProps = {
  liClickHandler: (feature: TFeature) => void
  currentFeature: TFeature
  feature: TFeature
}

export const FeatureListItem = ({
  liClickHandler,
  feature,
  currentFeature,
}: TListItemProps) => {
  const isCurrent = currentFeature === feature
  return (
    <li
      className={`mb-6 flex w-full -translate-y-1/2 cursor-pointer justify-center pt-0 text-3xl`}
    >
      <button
        className={`select-none duration-300 ${
          isCurrent ? 'scale-110 font-semibold' : 'scale-[0.6] text-zinc-500'
        }`}
        onClick={() => liClickHandler(feature)}
      >
        {feature.name}
      </button>
    </li>
  )
}
