import styles from "./Button.module.css";
import classNames from "classnames";

function Button({ className, variant, isDiv, ...restProps }) {
  if (isDiv === "div") {
    return (
      <button
        {...restProps}
        classNames={classNames(
          styles.button,
          variant && styles[variant],
          className
        )}
      />
    );
  }

  return (
    <button
      {...restProps}
      classNames={classNames(
        styles.button,
        variant && styles[variant],
        className
      )}
    />
  );
}

export default Button;
