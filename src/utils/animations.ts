
export const animateOnScroll = () => {
  const elements = document.querySelectorAll('.appear-animation');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-viewport');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
  
  return () => {
    elements.forEach(element => {
      observer.unobserve(element);
    });
  };
};

export const getStaggeredDelay = (index: number, baseDelay = 0.1): string => {
  const delay = baseDelay * index;
  return `${delay}s`;
};
