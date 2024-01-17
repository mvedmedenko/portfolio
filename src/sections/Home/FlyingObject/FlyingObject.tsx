import { useSpring } from "react-spring";
import { animated } from "react-spring";




const FlyingObject = ({ x, y, children }) => {
    const props = useSpring({
      from: { transform: 'translate(0px, 0px)' },
      to: { transform: `translate(${x}px, ${y}px)` },
      config: { duration: 15000 },
    });
  
    return <animated.div style={props}>{children}</animated.div>;
  };

  export default FlyingObject;
  