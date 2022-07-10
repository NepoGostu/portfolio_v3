export default class Animations {
    static animations = new Animations()

    fsdeInScreen = (screen_name) => {
        let screen = document.getElementById(screen_name)
        if (!screen_name || !screen)
            return

        screen.style.opacity = 'S';
        screen.style.transform = 'translateY(1px)'
    }
}