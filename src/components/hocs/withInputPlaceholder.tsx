import { useState, useEffect } from "react";

type Component = (props: any) => JSX.Element;

const withInputPlaceholder = (WrappedComponent: Component) => {
  const WithInputPlaceholder = (props: any) => {
    const [movePlaceholder, setMovePlaceholder] = useState(false);

    const onFocus = () => {
      if (props.value || !movePlaceholder) {
        setMovePlaceholder(true);
      }
    };

    const onBlur = () => {
      if (movePlaceholder && !props.value) {
        setMovePlaceholder(false);
      }
    };

    useEffect(() => {
      if (props.value && !movePlaceholder) {
        setMovePlaceholder(true);
      }
    }, [props.value]);

    return (
      <WrappedComponent
        {...props}
        onBlur={onBlur}
        onFocus={onFocus}
        movePlaceholder={movePlaceholder}
      />
    );
  };
  return WithInputPlaceholder;
};

export default withInputPlaceholder;
