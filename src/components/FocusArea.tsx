export default function FocusArea({
  name,
  description,
  imageSrcs,
  altTexts,
  captions,
}: {
  name: string;
  description: string[];
  imageSrcs: any[];
  altTexts: string[];
  captions: (string | null)[];
}) {
  return (
    <>
      <div class="grid md:grid-cols-2 grid-cols-1 w-full gap-10 text-base-content">
        <div class="w-full flex flex-col gap-8">
          {imageSrcs.map((imgSrc, index: number) => {
            return captions[index] != null ? (
              <div class="card bg-base-100 shadow-xl">
                <figure>
                  <img src={imgSrc} alt={altTexts[index]}/>
                </figure>
                {captions[index] != null && (
                  <div class="card-body py-5">
                    <h2 class="text-xl font-light text-center">{captions[index]}</h2>
                  </div>
                )}
              </div>
            ) : (
              <img src={imgSrc} alt={altTexts[index]} class="rounded-2xl" />
            );
          })}
        </div>
        <div class="w-full flex flex-col gap-4 mb-4">
          <h1 class="text-2xl bg-secondary-content p-2 rounded-2xl"> {name} </h1>
          <div class="w-full text-left flex flex-col gap-2">
            {description.map((paragraph: string) => {
              return (
                <>
                  <p class="w-full text-mdt"> {paragraph} </p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
