export default function Task({ title, description }) {
    this.title = title;
    this.description = description;
    this.isCompleted = false;
}

Task.prototype.markComplete = function markComplete() {
    this.isCompleted = true;
    return this.isCompleted;
};
