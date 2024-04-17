<template>
    <footer class="footer centered">
        <div class="container centered">
            <ul class="footer__list">
                <li><a href="#">About</a></li>
                <li><a href="#">Privacy & Policy</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Others</a></li>
            </ul>
        </div>
    </footer>
</template>

<style>
.footer {
    min-height: 40vh;
    padding: 0.5rem 1.5rem;
    background-color: gray;
}

.footer__list {
    display: flex;
    gap: 1rem;
    list-style: none;
}
</style>
