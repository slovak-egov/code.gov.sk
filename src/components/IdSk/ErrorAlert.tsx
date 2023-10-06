type ErrorAlertProps = {
  error: Error;
};

const ErrorAlert = ({ error: { name } }: ErrorAlertProps) => <div>{name}</div>;

export default ErrorAlert;
