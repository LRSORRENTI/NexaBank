import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover the Best Card Deals <br className="hidden sm:block" />
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Navigating through numerous credit card options can be daunting. At NexaBank, we simplify the process by providing tailored recommendations based on your financial needs and spending habits. Experience unparalleled convenience and choose the card that best suits your lifestyle.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100%] h-[100%]' />
    </div>
  </section>
);

export default CardDeal;
