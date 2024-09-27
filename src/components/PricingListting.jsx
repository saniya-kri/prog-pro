import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const pricingList = [
  {
    planTitle: "Basic",
    price: "$9",
    timeline: "/year",
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
    features: [
      { isActive: true, label: "Security Dashboards" },
      { isActive: true, label: "Multi-Level Epics" },
      { isActive: true, label: "24/7 Contact support" },
      { isActive: false, label: "Multi-Level Epics" },
      { isActive: true, label: "24/7 Contact support" },
    ],
    isActive: false,
  },
  {
    planTitle: "Standard",
    price: "$19",
    timeline: "/year",
    description:
      "It’s easier to reach your savings goals when you have the right savings account.",
    features: [
      { isActive: true, label: "Security Dashboards" },
      { isActive: true, label: "Multi-Level Epics" },
      { isActive: true, label: "24/7 Contact support" },
      { isActive: true, label: "Multi-Level Epics" },
      { isActive: false, label: "24/7 Contact support" },
    ],
    isActive: true,
  },
  {
    planTitle: "Premium",
    price: "$29",
    timeline: "/year",
    description:
      "Sed ut in perspiciatis unde omnis iste natus error sit tatem doloremque.",
    features: [
      { isActive: true, label: "Security Dashboards" },
      { isActive: false, label: "Multi-Level Epics" },
      { isActive: true, label: "24/7 Contact support" },
      { isActive: true, label: "Multi-Level Epics" },
      { isActive: true, label: "24/7 Contact support" },
      { isActive: true, label: "Multi-Level Epics" },
      { isActive: true, label: "24/7 Contact support" },
    ],
    isActive: false,
  },
];

const PricingItem = ({ pricing }) => {
  const { planTitle, price, timeline, description, features, isActive } =
    pricing;
  return (
    <div
      className={`rounded-2xl shadow p-4 lg:p-12 h-full ${
        isActive
          ? "bg-blue-600 text-white"
          : "bg-blue-50 text-black dark:bg-[#fff] dark:text-black"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-3xl font-bold mb-2">{planTitle}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="ml-2 opacity-50">{timeline}</span>
        </div>
      </div>
      <p className="opacity-50 mb-6">{description}</p>

      <ul className="flex flex-col mt-6">
        {features.map((feature, i) => {
          const { isActive, label } = feature;
          return (
            <li className={i < features.length && "mb-4"} key={i}>
              <FontAwesomeIcon
                icon={isActive ? faCheck : faTimes}
                className={`mr-2 ${
                  isActive ? "text-blue-600" : "text-red-300"
                }`}
              />
              <span className={isActive ? "opacity-80" : "opacity-50"}>
                {label}
              </span>
            </li>
          );
        })}
      </ul>
      <button
        className={`border border-blue-600 text-blue-600 rounded-md px-7 py-3 w-full mt-6 hover:bg-blue-600 hover:text-white duration-300 ${
          isActive && "bg-white text-black border-white"
        }`}
      >
        Choose plan
      </button>
    </div>
  );
};

PricingItem.propTypes = {
  pricing: PropTypes.object.isRequired,
};

const PricingListting = () => {
  return (
    <div className="bgImg w-full">
      <section className="w-10/12 mx-auto ezy__pricing5 light py-14 md:py-24 text-zinc-900 dark:text-black">
        <div className="w-11/12 mx-auto flex justify-between items-center">

	<div className="lg:w-10/12 w-10/12 mx-auto lg:mt-32 mt-12">
        <h2 className="text-[#5041bc] text-3xl font-medium">Plans & Pricing</h2>
        <div className="flex lg:flex-nowrap flex-wrap w-full justify-between">
          <div>
            <p className="text-[14px] font-medium mt-10">
              Whether your GROWTH needs are large or small, we’re here to help
              you scale.
            </p>
          </div>
          <div className="space-x-12 flex justify-around lg:items-center items-end">
            <div className="mt-5 lg:text-[12px] text-[14px] lg:pb-0 pb-2 text-[#5041bc] font-bold mx-10">
              <button>Monthly</button>
            </div>
            <div className="mt-5">
              {" "}
              <button className="mr-10 py-3 px-5 rounded-3xl bg-[#ff8057] text-white text-[12px] font-bold">
                Yearly
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-12">
          {pricingList.map((pricing, i) => (
            <div className="col-span-3 lg:col-span-1" key={i}>
              <PricingItem pricing={pricing} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

{
  /* <div className="container px-4 mx-auto">
				<div className="flex justify-center items-center">
					<div className="max-w-xl text-center">
						<h2 className="text-3xl font-bold leading-none md:text-[45px] mb-4">
							Choose Your Subscription!
						</h2>
						<p className="">Choice suitable plan for you.</p>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-6 mt-12">
					{pricingList.map((pricing, i) => (
						<div className="col-span-3 lg:col-span-1" key={i}>
							<PricingItem pricing={pricing} />
						</div>
					))}
				</div>
			</div> */
}

export default PricingListting;
