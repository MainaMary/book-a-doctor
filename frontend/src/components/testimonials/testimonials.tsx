import TestimonialsSection from "./testimonials-section";

const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center m-auto">
          <h2 className="text-[16px] leading-[20px] text-heading font-[800] md:text-[36px] md:leading-[40px]">
            We love our patients and our patients <br /> love us
          </h2>
          <p>
            World-class care for everyone. Our healthcare system offers
            unmatched, expert healthcare
          </p>
        </div>
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default Testimonials;
