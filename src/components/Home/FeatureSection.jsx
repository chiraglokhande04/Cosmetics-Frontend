
import icon1 from "../../assets/icon1.png"; // Adjust the path as necessary
import icon2 from "../../assets/icon2.png"; // Adjust the path as necessary
import icon3 from "../../assets/icon3.png"; // Adjust the path as necessary
import icon4 from "../../assets/icon4.png"; // Adjust the path as necessary

const FeatureSection = () => {
  const features = [
    { icon: icon1, text: "Sraddha",value:"(Trust)" },
    { icon: icon2, text: "Ahimsa",value:"(Non-harm)" },
    { icon: icon3, text: "Satya ",value:"(Truth)" },
    { icon: icon4, text: "Seva",value:"(Service)" },
  ];

  const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap';
fontLink.rel = 'stylesheet';
if (!document.head.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

  return (
    <div className=" bg-white py-20 flex flex-col items-center">
      <h2 className="text-[43px] font-light mb-14">We Love & We Support</h2>
      <div className="flex justify-center gap-40">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <img className="h-[99px] w-[100px]" src={feature.icon} />
            <div className="mt-2 text-[16px] font-extralight w-[166.68px] text-center"
             style={{
              fontFamily: 'Myriad Pro, Source Sans Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}><div>{feature.text}</div>
            <div>{feature.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
