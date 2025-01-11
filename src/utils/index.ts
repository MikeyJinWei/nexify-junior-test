export function parseErrorMessage(errorMsg?: string) {
  try {
    const { Success, Msg } = JSON.parse(errorMsg || "{}");
    return {
      Success: !!Success,
      Msg: Msg || "An error occurred",
    };
  } catch {
    return {
      Success: false,
      Msg: "Failed to parse error message",
    };
  }
}
