
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing");
  const text = typingElement.textContent;
  typingElement.textContent = ""; // نفرغ النص الأصلي

  // نحط كل حرف فـ span
  text.split("").forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    typingElement.appendChild(span);
  });

  // نزيد المؤشر
  const cursor = document.createElement("span");
  cursor.classList.add("cursor");
  typingElement.appendChild(cursor);

  let i = 0;
  function type() {
    if (i < text.length) {
      typingElement.querySelectorAll("span")[i].style.opacity = 1;
      i++;
      setTimeout(type, 100); // سرعة الكتابة (100ms للحرف)
    }
  }
  type();
});

