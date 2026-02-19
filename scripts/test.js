const TARGET_TEXT = "recommend this job anymore.";
const TARGET_PARENT_PATHNAME = "/jobs/collections/recommended/";

function removeTargetElements(root = document.body) {
    const textElements = root.querySelectorAll("a");
    for (const el of textElements) {

        const pathname = el.pathname || "";

        if (pathname.includes(TARGET_PARENT_PATHNAME)){
            console.log(el)
        }
    }
}

removeTargetElements();

