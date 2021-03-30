import Macy from "Macy"

export const masonryLayout = () => {
  const containers = document.querySelectorAll('.photo__container')
  containers.forEach(cont=>{
    const macyInstance = Macy({
      container: cont,
      trueOrder: false,
      waitForImages: false,
      mobileFirst:true,
      margin: 5,
      columns: 3,
      breakAt: {
        1200: 4,
      }
    });
  })
}