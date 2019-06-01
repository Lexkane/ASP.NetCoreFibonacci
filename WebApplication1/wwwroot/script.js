window.addEventListener('load', () => {
        document.querySelector('button').addEventListener('click', async () => {
            const response = await fetch('path1');
            if (response.ok) {
                const text = await response.text();
                window.alert("text");
            }
        });
    }
);