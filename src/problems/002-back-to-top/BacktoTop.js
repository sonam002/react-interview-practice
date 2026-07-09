import { useEffect, useState } from "react";

const BacktoTop = () => {
   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to toggle visibility
    const handleScroll = () => {
        if(window.scrollY > 500){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Implement smooth scroll to top
     window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      {/* Add some content to enable scrolling */}

      <div className="container">
        {/* Show this button only after scrolling down */}
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>This is paragraph {i + 1}</p>
        ))}
        {isVisible && (
         <button
          className="backtotop-btn"
          onClick={scrollToTop}
          data-testid="back-to-top-btn"
        >
          Back to Top
        </button>
        )}
      </div>
    </div>
  );
};

export default BacktoTop;
