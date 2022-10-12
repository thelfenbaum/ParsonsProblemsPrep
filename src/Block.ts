export type BlockState = {
    // Abstract
    id: string;
    x: number; // x position
    y: number; // y position
    label: string; // print(x)
    beingDragged: boolean;

    // Concrete
    element: HTMLElement;
}

export function createBlockState(overrides: Partial<BlockState> = {}) {
    const element = document.createElement("div");
    element.classList.add("block");

    const base: BlockState = {
        x: 0,
        y: 0,
        label: "None",
        beingDragged: false,

        element: element
    }
    document.body.appendChild(element);

    updateBlockElement(base);
    blockAddEventListeners(base);

    return {...base, ...overrides};
}

export function updateBlockElement(block: BlockState) {
    block.element.style.left = `${block.x}px`;
    block.element.style.top = `${block.y}px`;

    if (block.element.innerText != block.label) {
        block.element.innerText = block.label;
    }
}

export function blockAddEventListeners(block: BlockState) {
    let _prevMousePosition = {x: 0, y: 0};

    block.element.addEventListener("mousedown", (e) => {
        block.beingDragged = true;
        block.element.classList.add("selected");

        _prevMousePosition = {x: e.x, y: e.y};
    })

    document.body.addEventListener("mouseup", (e) => {
        if (!block.beingDragged) {
            return;
        }
        block.element.classList.remove("selected");

        block.beingDragged = false;
    })

    document.body.addEventListener("mousemove", (e) => {
        if (block.beingDragged) {
            const dx = e.x - _prevMousePosition.x;
            const dy = e.y - _prevMousePosition.y;

            block.x += dx;
            block.y += dy;

            updateBlockElement(block);
        }

        _prevMousePosition = {x: e.x, y: e.y};
    })
}