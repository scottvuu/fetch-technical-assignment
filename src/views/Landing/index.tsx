import { BackButton } from 'components/atoms/BackButton';
import { ArrowRightIcon } from 'components/icons/ArrowRightIcon';
import { Reward } from 'components/widgets/Reward';
import { Reward as IReward } from 'types/reward';
import { rewards } from './mock';
import { ProcessBar } from 'components/atoms/ProcessBar';
import { InsufficientCoint } from 'components/icons/InsufficientCoint';

const Landing = () => {
  const onBack = () => {
    //
  };

  const renderRewards = (rewards: IReward[]) => {
    return (rewards || []).map((reward) => {
      const title = reward?.insufficientCoint ? (
        <p className="text-grey-03 font-600 flex items-center">
          <InsufficientCoint />
          <span className="ml-4">{`${reward.amount} Coins`}</span>
        </p>
      ) : (
        <p className="text-primary-500">{`${reward.amount} Coins`}</p>
      );
      return (
        <li className="list-horizontal__item">
          <Reward title={title} description={reward.description} thumbImg={reward.thumbUrl} />
        </li>
      );
    });
  };

  return (
    <div>
      <div className="header-banner py-24">
        <div className="px-24">
          <BackButton onBack={onBack} />
          <h1 className="mb-16 mt-24 text-white">Silver Tier</h1>
          <p className="text-grey-05">
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.
          </p>
        </div>
        <div className="balance px-24 py-24 mx-16 mt-32">
          <span className="text-grey-05 font-600">Available Coin balance</span>
          <h1 className="amount mt-12 font-400 mt-28 mb-28">340</h1>
          <div className="my-40">
            <ProcessBar process={70} />
          </div>
          <p className="text-grey-04 mb-16 mt-16">
            You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
          </p>
          <p className="btn btn-link btn-link-primary font-400">
            View tier benefits
            <ArrowRightIcon />
          </p>
          <div className="my-coupons btn btn-primary w-100 btn-xxl my-16 btn-black coupon-btn">My Coupons</div>
          <span className="block text-grey-05 text-center mt-24">Updated : 02/11/2021</span>
          <div className="bling-bg" />
        </div>
      </div>
      <div className="my-32 pl-16 pb-20">
        <h6 className="mb-24">Petrol</h6>
        <ul className="list list-horizontal">{renderRewards(rewards)}</ul>
      </div>
      <div className="my-32 pl-16 pb-20">
        <h6 className="mb-24">Rental Rebate</h6>
        <ul className="list list-horizontal">{renderRewards(rewards)}</ul>
      </div>
      <div className="my-32 pl-16 pb-20">
        <h6 className="mb-24">Food and Beverage</h6>
        <ul className="list list-horizontal">{renderRewards(rewards)}</ul>
      </div>
    </div>
  );
};

export default Landing;
