import { useEffect, useRef, useState } from "react"
import classNames from "classnames";

interface SlideProps {
  children: React.ReactNode
}

export default function Slide({ children }: SlideProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerSlide = useRef<HTMLDivElement>(null);
  const [slideElements, setSlideElements] = useState<{
    element: HTMLDivElement,
    position: number,
  }[]
  >([]);
  const slideIndexs = useRef({
    prev: -1,
    active: 0,
    next: 1
  }); 

  const positionInit = useRef(0);
  const positionFinal = useRef(0);
  const movement = useRef(0);
  const distanceRefValue = useRef(0);
  const [distance, setDistance] = useState(0);

  const [moving, setMoving] = useState(false);

  function onStart(event: MouseEvent) {
    event.preventDefault();

    positionInit.current = event.clientX;

    wrapperRef.current?.addEventListener("mousemove", onMove);
  }

  function onStartTouch(event: TouchEvent) {
    event.preventDefault();

    positionInit.current = event.changedTouches[0].clientX;

    wrapperRef.current?.addEventListener("touchmove", onMoveTouch);
  }

  function onMove(event: MouseEvent) {
    const movementReal = (positionInit.current - event.clientX) * 1.2;
    movement.current = movementReal;
    const movementValue = positionFinal.current - movementReal;
    
    distanceRefValue.current = movementValue;
    setDistance(movementValue);
    setMoving(true);
  }

  function onMoveTouch(event: TouchEvent) {
    const clientX = event.changedTouches[0].clientX;
    const movementReal = (positionInit.current - clientX) * 1.2;
    movement.current = movementReal;
    const movementValue = positionFinal.current - movementReal;
    
    distanceRefValue.current = movementValue;
    setDistance(movementValue);
    setMoving(true);
  }

  function onEnd() {
    positionFinal.current = distanceRefValue.current;

    changeSlideOnEnd();

    wrapperRef.current?.removeEventListener("mousemove", onMove);
  }

  function onEndTouch() {
    positionFinal.current = distanceRefValue.current;

    changeSlideOnEnd();

    wrapperRef.current?.removeEventListener("touchmove", onMoveTouch);
  }

  function updateIndexs(index: number) {
    const last = slideElements.length - 1;

    slideIndexs.current = {
      prev: index ? index - 1 : -1,
      active: index,
      next: index === last ? -1 : index + 1,
    }
  }

  function changeSlideByIndex(index: number) {
    const slideItem = slideElements[index];
    const slideActive = slideElements[slideIndexs.current.active];

    if(!slideItem) return;

    slideActive.element.classList.remove("active-slide-item");
    slideItem.element.classList.add("active-slide-item");

    const distance = slideItem.position;
    setDistance(distance);
  
    updateIndexs(index);

    positionFinal.current = distance;
  }

  function changeSlideOnEnd() {
    if(movement.current > 200 && slideIndexs.current.next >= 0) {
      changeSlideByIndex(slideIndexs.current.next);
    } else if (movement.current < -200 && slideIndexs.current.prev >= 0) {
      changeSlideByIndex(slideIndexs.current.prev);
    } else {
      changeSlideByIndex(slideIndexs.current.active);
    }

    setMoving(false);
  }

  useEffect(() => {
    if(containerSlide.current && wrapperRef.current) {
      const childrens = Array.from(containerSlide.current.children);
      
      const childrensSettings = childrens.map((element) => {
        const elementDiv = element as HTMLDivElement;

        const margin = (wrapperRef.current?.offsetWidth! - elementDiv.offsetWidth) / 2; 
        const position = -(elementDiv.offsetLeft - margin);

        return {
          element: elementDiv,
          position,
        }
      });
      
      changeSlideByIndex(0);

      setSlideElements(childrensSettings);
    }
  }, [containerSlide.current, wrapperRef.current])

  useEffect(() => {
    if(wrapperRef.current) {
      wrapperRef.current.addEventListener("mousedown", onStart);
      wrapperRef.current.addEventListener("mouseup", onEnd);

      wrapperRef.current.addEventListener("touchstart", onStartTouch);
      wrapperRef.current.addEventListener("touchend", onEndTouch);
    }

    return () => {
      if(wrapperRef.current) {
        wrapperRef.current.removeEventListener("mousedown", onStart);
        wrapperRef.current.removeEventListener("mouseup", onEnd);
        wrapperRef.current.removeEventListener("mousemove", onMove);

        wrapperRef.current.removeEventListener("touchstart", onStartTouch);
        wrapperRef.current.removeEventListener("touchend", onEndTouch);
        wrapperRef.current.removeEventListener("touchmove", onMoveTouch);
      }
    }
  }, [wrapperRef.current])

  return (
    <div ref={wrapperRef} role="slider">
      {
        slideElements.length > 0 && (
          <div
            className="flex gap-x-6 justify-center mb-8 lg:mb-12"
            role="navigation"
          >
            {
              slideElements.map((_, index) => {
                return (
                  <button 
                    className={classNames(
                      "w-3 h-3 rounded-full bg-midnightExpresso shadow-button-active transition-colors hover:bg-skyBlaze focus:bg-skyBlaze focus:outline-none",
                      {"bg-skyBlaze": index === slideIndexs.current.active}
                    )}
                    aria-label="Botão para navegar entre os slides"
                    onClick={() => changeSlideByIndex(index)}
                    key={`button-nagivation-slide-${index}`}
                  />
                )
              })
            }
          </div>
        )
      }
      <div 
        className={classNames(
          "flex gap-x-1 sm:gap-x-4 md:gap-x-6 lg:gap-x-12",
          {"transition-transform duration-300": !moving}
          )} 
        ref={containerSlide}
        role="group"
        style={{transform: `translate3d(${distance}px, 0, 0)`}}
        >
        { children }
      </div>
    </div>
  )
}