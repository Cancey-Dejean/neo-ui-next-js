import ContentContainer from "./ContentContainer";

const Features = ({}: {}) => {
  return (
    <section>
      <ContentContainer className="max-w-[950px]">
        <div className="grid grid-cols-2 gap-6">
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Features;
