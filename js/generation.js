var llff_items = [
    { image: "llff3.png", title: "Qualitative Comparison on LLFF dataset with 3-view", description: "Qualitative Comparison on LLFF dataset with 3-view" },
    { image: "llff6.png", title: "Qualitative Comparison on LLFF dataset with 6-view", description: "Qualitative Comparison on LLFF dataset with 6-view" }
];


function llff_carousel_item_template(item) {
    return `<div class="x-card" style="min-width: 400px; margin: 10px;">
                <div style="width: 100%; text-align: center;">
                    <img src="assets/${item.image}" alt="${item.title}" style="width: 100%; height: auto; border-radius: 8px;">
                </div>
                <div class="caption" style="text-align: center; margin-top: 10px;">
                    <div style="font-weight: 600; font-size: 16px;">
                        ${item.title}
                    </div>
                </div>
            </div>`;
}