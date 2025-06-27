import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// Extend dayjs with the plugin (only once globally)
dayjs.extend(relativeTime);

// Export the configured dayjs instance
export default dayjs;
