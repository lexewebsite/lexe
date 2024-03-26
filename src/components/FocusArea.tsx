export default function FocusArea({name, description, imageSrcs, altTexts, captions}: {name: string, description: string[], imageSrcs: any[], altTexts: string[], captions: (string | null)[]}) {
    return <> 
      <div class="grid grid-cols-2 sm:grid-cols-1 w-full gap-4"> 
        <div class="w-full flex flex-col gap-4"> 
            {imageSrcs.map((imgSrc, index: number) => {
                return <div class="w-full flex flex-col gap-4"> 
                        <img src={imgSrc} alt={altTexts[index]} />
                        {captions[index] != null && <p class="text-center w-full"> {captions[index]} </p> }
                    </div>
            })}
        </div> 
        <div class="w-full flex flex-col gap-4 mb-4">
            <h1 class="text-2xl bg-red-200"> {name} </h1> 
            <div class="w-full text-left flex flex-col gap-2"> 
                {description.map((paragraph: string) => {
                    return <> 
                    <p class="text-gray-500 w-full text-md"> {paragraph} </p>  
                    </>
                })}
            </div> 
            
        </div>
      </div> 
    </> 
  }
  