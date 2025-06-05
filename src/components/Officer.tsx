export default function Officer({ name, description, email = null }) {
  return (
    <>
      <div class="flex flex-col gap-1 w-full text-center sm:text-left">
        <h1 class="text-2xl w-full font-extrabold"> {name} </h1>
        <h2 class="text-2xl font-light w-full"> {description} </h2>
        {email == null ? <></> : <h2 class="text-md lg:text-xl font-mono w-full"> {email} </h2>}
      </div>
    </>
  );
}
