import { useState, useEffect, useMemo, CSSProperties } from "react";

type Component = (props: any) => JSX.Element;

const withInputPlaceholder = (WrappedComponent: Component) => {
  const WithInputPlaceholder = (props: any) => {
    const [movePlaceholder, setMovePlaceholder] = useState<boolean>(false);
    const placeholderStyle = useMemo(
      () => stylePlaceholder(movePlaceholder),
      [movePlaceholder]
    );

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
        placeholderStyle={placeholderStyle}
      />
    );
  };
  return WithInputPlaceholder;
};

const stylePlaceholder = (move: boolean) => (move ? spanStyle : {});

const spanStyle: CSSProperties = {
  top: 2,
  fontSize: 14,
  transform: "translateY(0)",
};

export default withInputPlaceholder;
