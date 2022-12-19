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
      className={`mb-6 flex h-20 w-full -translate-y-1/2 cursor-pointer justify-center pt-0 text-3xl duration-100`}
    >
      <button
        className={`select-none duration-300 ${
          isCurrent ? 'scale-110 font-semibold opacity-100' : 'none opacity-0'
        }`}
        onClick={() => liClickHandler(feature)}
      >
        {feature.name}
      </button>
    </li>
  )
}
