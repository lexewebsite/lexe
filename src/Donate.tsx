import donation from "./assets/donation/donation.gif";
import PDF from "./assets/donation/Donation-Form-Version-2.pdf";

function Donate() {
  const paragraph =
    "The fundraising goal for the current school year is $300,000. The suggested contribution per family is $ 425 or whatever fits your budget. Lynbrook Excellence in Education is an IRS approved 501(c)(3) public charity. Based on this status all contributions are tax-deductible. We will gladly accept contributions of cash, check, or by credit card.";
  const DONATION_STRING =
    "https://www.paypal.com/donate?token=tDEyf_n4cjKFXc6bnSc1OBmdIYrvBGRAu2zy2ldIz-Dm25MZDOqMsC6ECRNVxz2vIKgcRt3qJgf87C2M";
  return (
    <div class="w-full text-center">
      <h1 class="text-7xl text-center m-12 w-full">Donate</h1>
      <div class="w-full grid grid-cols-4">
        <span class="col-span-1"></span>
        <p class="text-left w-full col-span-2"> {paragraph} </p>
      </div>

      {/** This section of the website should go horizontally down while be text-lefted.*/}
      <div class="w-full flex flex-col gap-2 mt-4 ml-[25%] mb-[15%]">
        <a href={DONATION_STRING} target="_blank">
          {" "}
          <img
            src={donation}
            width={150}
            alt="Please click on this image in order to access our page for donations."
          />{" "}
        </a>
        <p class="text-2xl text-left">
          {" "}
          <strong> By Mail: </strong>{" "}
        </p>
        <p class="text-md text-left text-gray-400">
          {" "}
          Download the{" "}
          <a href={PDF} class="text-purple-500" target="_blank">
            {" "}
            Donation Form{" "}
          </a>{" "}
          and mail with your donation to:{" "}
        </p>
        <p class="text-2xl text-left">
          {" "}
          <strong> Our Address: </strong>{" "}
        </p>
        <p class="text-md text-left text-gray-400">
          {" "}
          1280 Johnson Ave, San Jose, CA 95129.{" "}
        </p>
      </div>
    </div>
  );
}

export default Donate;
