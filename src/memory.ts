const history: string[] = [];

export function saveMessage(role: string, message: string) {
  history.push(`${role}: ${message}`);
}

export function getHistory() {
  return history.join("\n");
}