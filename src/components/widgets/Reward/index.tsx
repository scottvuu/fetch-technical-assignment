import { ReactNode } from 'react';

type Props = {
  thumbImg?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
};

export const Reward = ({ thumbImg, title, description, children }: Props) => {
  return (
    <div className="card">
      {thumbImg && (
        <div className="card-thumbImg">
          <img src={thumbImg} alt="thumb-image" />
        </div>
      )}
      <div className="card-body">
        <p className="card-title text-primary-500 font-600">{title}</p>
        {description && <p className="card-description text-grey-04">{description}</p>}
        {children}
      </div>
    </div>
  );
};
