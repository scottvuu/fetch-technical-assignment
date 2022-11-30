type Props = {
  process: number; // %
  size?: 'sm' | 'md' | 'lg';
};
export const ProcessBar = ({ process, size = 'sm' }: Props) => {
  return (
    <div className={`process-bar process-bar-${size}`}>
      <div className={`process-bar-${size} process-bar-${size}-active`} style={{ width: `${process}%` }}></div>
    </div>
  );
};
