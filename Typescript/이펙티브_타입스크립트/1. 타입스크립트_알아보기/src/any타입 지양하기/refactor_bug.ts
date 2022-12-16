interface ComponentProps {
    onSelectItem: (id: number) => void;
}

function renderSelector(props: ComponentProps) {
    const { onSelectItem } = props;
    onSelectItem(1);
}

let selectedItem: number = 0;
function handleSelectItem(id: number) {
    selectedItem = id;
}

renderSelector({ onSelectItem: handleSelectItem });
