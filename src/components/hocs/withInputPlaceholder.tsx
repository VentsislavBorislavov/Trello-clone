import { useState } from "react";

const withInputPlaceholder = (WrappedComponent: any) => {
  const WithInputPlaceholder = (props: any) => {
    const [movePlaceholder, setMovePlaceholder] = useState(false);

    const onFocus = () => {
      if (!props.value || !movePlaceholder) {
        setMovePlaceholder(!movePlaceholder);
      }
    };

    const onBlur = () => {
      if (movePlaceholder && !props.value) {
        setMovePlaceholder(!movePlaceholder);
      }
    };
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
