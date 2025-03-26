import donation from "./assets/donation/donation.gif";
import PDF from "./assets/donation/Donation-Form-Version-2.pdf";

function Donate() {
  const paragraph =
    "The fundraising goal for the current school year is $300,000. The suggested contribution per family is $ 425 or whatever fits your budget. Lynbrook Excellence in Education is an IRS approved 501(c)(3) public charity. Based on this status all contributions are tax-deductible. We will gladly accept contributions of cash, check, or by credit card.";
  const DONATION_STRING =
    "https://www.paypal.com/donate?token=_1Lnq5WletsSAbO4Q-pZHLiIDOzsRUHIV4UoVF_b6yHwUgfhqgrvPL8L1uWVVkmWKYK8NfA8WrmcAae0";
  return (
    <div class="container px-4 py-12 flex flex-col items-center gap-2 text-base-content">
      <h1 class="text-5xl font-extrabold text-center mb-4">Donate</h1>
      <p class="text-left text-pretty text-md lg:text-xl max-w-4xl"> {paragraph} </p>

      {/** This section of the website should go horizontally down while be text-lefted.*/}
      <div class="container flex flex-col gap-2 max-w-4xl">
        <p class="text-2xl lg:text-3xl mt-8 font-extrabold">
          PayPal:
        </p>
        <a href={DONATION_STRING} target="_blank" class="w-64 self-center">
          <img
            src={donation}
            class="w-full"
            alt="Please click on this image in order to access our page for donations."
          />
        </a>
        <p class="text-2xl lg:text-3xl mt-8 font-extrabold">
          By Mail:
        </p>
        <p class="text-md lg:text-xl max-w-4xl">
          Download the{" "}
          <a href={PDF} class="text-primary" target="_blank">
            Donation Form
          </a>{" "}
          and mail with your donation to:
        </p>
        <p class="text-md lg:text-xl max-w-4xl font-mono">
          1280 Johnson Ave, San Jose, CA 95129
        </p>
      </div>
    </div>
  );
}

export default Donate;
