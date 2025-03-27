import { meet } from '@googleworkspace/meet-addons/meet.addons';

export function onMeetOpen(event) {
    const card = meet.ui.createCard({
        title: "Welcome to My Google Meet Add-on",
        sections: [{
            widgets: [{ textParagraph: { text: "This is a test add-on!" } }]
        }]
    });
    return [card];
}
