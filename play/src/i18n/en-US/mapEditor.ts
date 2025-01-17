import type { BaseTranslation } from "../i18n-types";

const mapEditor: BaseTranslation = {
    map: {
        refreshPrompt: "New version of map detected. Refresh needed",
    },
    sideBar: {
        areaEditor: "Area editor tool",
        entityEditor: "Entity editor tool",
        tileEditor: "Tile editor tool",
        configureMyRoom: "Configure my room",
        trashEditor: "Trash",
    },
    properties: {
        silentProperty: {
            label: "Silent",
            description: "Do not allow for conversations inside.",
        },
        textProperties: {
            label: "Header Text",
            placeholder: "Input here text which will be displayed when interacting with the object",
        },
        focusableProperties: {
            label: "Focusable",
            description: "Focus camera on this area on enter.",
            zoomMarginLabel: "Zoom Margin",
            defaultButtonLabel: "Focus on",
        },
        jitsiProperties: {
            label: "Jitsi Room",
            description: "Start Jitsi meeting on enter.",
            roomNameLabel: "Room Name",
            jitsiUrl: "Jitsi URL",
            jitsiUrlPlaceholder: "meet.jit.si",
            roomNamePlaceholder: "Room Name",
            defaultButtonLabel: "Open Jitsi Room",
            audioMutedLabel: "Muted by default",
            moreOptionsLabel: "More Options",
            trigger: "Interaction",
            triggerMessage: "Toast Message",
            triggerShowImmediately: "Show immediately on enter",
            triggerOnClick: "Start as minimized in bottom bar",
            triggerOnAction: "Show action toast with message",
            closable: "Can be closed",
            noPrefix: "No Jitsi room name prefix",
            jitsiRoomConfig: {
                addConfig: "Add an option",
                startWithAudioMuted: "Start with microphone muted",
                startWithVideoMuted: "Start with video closed",
                cancel: "Cancel",
                validate: "Validate",
            },
        },
        audioProperties: {
            label: "Play Audio File",
            description: "Play audio with adjustable volume.",
            volumeLabel: "Volume",
            audioLinkLabel: "Audio Link",
            audioLinkPlaceholder: "https://xxx.yyy/smthing.mp3",
            defaultButtonLabel: "Play music",
        },
        linkProperties: {
            label: "Open Link",
            description: "Open website within WorkAdventure or as a new tab.",
            linkLabel: "Link URL",
            newTabLabel: "Open in new tab",
            trigger: "Interaction",
            triggerMessage: "Toast Message",
            triggerShowImmediately: "Show immediately on enter",
            triggerOnClick: "Start as minimized in bottom bar",
            triggerOnAction: "Show action toast with message",
            closable: "Can be closed",
            allowAPI: "Allow API",
            linkPlaceholder: "https://example.com",
            defaultButtonLabel: "Open Link",
            width: "Width",
            policy: "iFrame Allow",
            policyPlaceholder: "fullscreen",
            errorEmbeddableLink: "The link is not embeddable",
            warningEmbeddableLink: "The link is not embeddable. It will open in a new tab",
            errorInvalidUrl: 'Please enter a valid URL (starting with "https://")',
            findOutMoreHere: "Find out more here",
        },
        advancedOptions: "Advanced Options",
        speakerMegaphoneProperties: {
            label: "SpeakerZone for megaphone",
            description: "",
            nameLabel: "Name",
            namePlaceholder: "MySpeakerZone",
        },
        listenerMegaphoneProperties: {
            label: "ListenerZone for megaphone",
            description: "",
            nameLabel: "SpeakerZone Name",
            namePlaceholder: "MySpeakerZone",
        },
        chatEnabled: "Associate a dedicated chat channel",
        startProperties: {
            label: "Start area",
            description: "Where people can start in the map.",
            nameLabel: "Start name",
            namePlaceholder: "Enter1",
        },
        exitProperties: {
            label: "Exit area",
            description: "Where people can exit the map to another one.",
            exitMap: "Exit map",
            exitMapStartAreaName: "Start area name",
        },
    },
    areaEditor: {
        editInstructions: "Click an area to modify its properties.",
        nameLabel: "Name",
    },
    entityEditor: {
        itemPicker: {
            searchPlaceholder: "Search",
        },
        trashTool: {
            delete: "Click on the object to delete it!",
        },
        deleteButton: "Delete",
        testInteractionButton: "Test Interaction",
        buttonLabel: "Button Label",
        editInstructions: "Click an entity to modify its properties.",
        selectObject: "Click on an object to select it",
    },
    settings: {
        loading: "Loading",
        megaphone: {
            title: "Megaphone",
            description:
                "The megaphone is a tool that allows you to broadcast a video/audio stream to all players in the room/world.",
            inputs: {
                spaceName: "Space name",
                spaceNameHelper:
                    "If you want to broadcast a stream to all the users that are on different rooms but in the same world, you must set the same SpaceName for all the megaphone settings in each room and set the scope to 'World'.",
                scope: "Scope",
                world: "World",
                room: "Room",
                rights: "Rights",
                rightsHelper:
                    "The rights define who can use the megaphone. If you leave it empty, anyone can use it. If you set it, only users that have one of those 'tag' can use it.",
                error: {
                    title: "Please enter a title",
                    save: {
                        success: "Megaphone settings saved",
                        fail: "Error while saving megaphone settings",
                    },
                },
            },
        },
    },
};

export default mapEditor;
