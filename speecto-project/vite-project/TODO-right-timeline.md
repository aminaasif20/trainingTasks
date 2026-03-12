# Right Side Timeline Plan

**Goal**: Add symmetric vertical line + 4 dots on RIGHT side of Product Design content, using completely separate CSS (new classes: .timeline-right-line, .timeline-dot-right).

**Structure**:
- Wrap content in .content-wrapper (max-w-6xl flex).
- Left: current timeline items.
- Center: timeline-line (thin spacer).
- Right: .timeline-right-column with ::before line (pink gradient) + per-item .timeline-dot-right (pink, right:-87px).

**CSS** (add to Sections.css):
```css
.timeline-right-column {
  flex: 0 0 100px;
  position: relative;
  padding-right: 80px;
}

.timeline-right-column::before {
  content: "";
  position: absolute;
  right: 0;
  top: -80px;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, transparent 0%, #dce8ff 10%, #f74ec7 30%, #f74ec7 100%);
}

.timeline-dot-right {
  position: absolute;
  right: -87px;
  top: 15px;
  width: 16px;
  height: 16px;
  background-color: #f74ec7;
  border-radius: 50%;
}
```

**JSX Changes** (ProductDesgin.jsx):
- Add .timeline-right-column after current right spacer, with 4 .timeline-dot-right in items.
- Items: relative position, add .timeline-dot-right.

**Plan Confirmation**:
Proceed?

