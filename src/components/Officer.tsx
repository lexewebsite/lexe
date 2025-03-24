export default function Officer({name, description}) {
  return (
    <>
      <div class="flex flex-col gap-1 w-full">
        <h1 class="text-2xl w-full font-extrabold"> {name} </h1>
        <h2 class="text-1xl font-light w-full"> {description} </h2>
      </div>
    </>
  );
}
