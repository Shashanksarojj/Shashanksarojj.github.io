declare global {
  interface Window {
    showToast: (message: string) => void;
    GitHubCalendar: (
      selector: string,
      username: string,
      options?: Record<string, unknown>
    ) => void;
  }
}

export {};
