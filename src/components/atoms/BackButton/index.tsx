import { ArrowLeftIcon } from 'components/icons/ArrowLeftIcon';

type Props = {
  onBack: () => void;
};

export const BackButton = ({ onBack }: Props) => {
  return (
    <div className="btn btn-back w-max-content" onClick={onBack}>
      <ArrowLeftIcon color="var(--color-black)" />
    </div>
  );
};
