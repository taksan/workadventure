import { z } from "zod";
import { extendApi } from "@anatine/zod-openapi";
import { isMucRoomDefinition } from "./MucRoomDefinitionInterface";

/*
 * WARNING! The original file is in /messages/JsonMessages.
 * All other files are automatically copied from this file on container startup / build
 */

const isBbbData = z.object({
    url: extendApi(z.string(), {
        description: 'The full URL to your BigBlueButton server. Do not forget the trailing "/bigbluebutton/".',
        example: "https://test-install.blindsidenetworks.com/bigbluebutton/",
    }),
    secret: extendApi(z.string(), {
        description:
            'The BigBlueButton secret. From your BBB instance, you can get the correct values using the command: "bbb-conf --secret"',
    }),
});

const isJitsiData = z.object({
    url: extendApi(z.string(), {
        description: "The domain name of your Jitsi server.",
        example: "meet.jit.si",
    }),
    iss: extendApi(z.string().nullable().optional(), {
        description: "The Jitsi ISS setting. See https://github.com/jitsi/lib-jitsi-meet/blob/master/doc/tokens.md",
        default: false,
    }),
    secret: extendApi(z.string().nullable().optional(), {
        description: "The Jitsi secret setting. See https://github.com/jitsi/lib-jitsi-meet/blob/master/doc/tokens.md",
    }),
});

const isMapThirdPartyData = z.object({
    bbb: extendApi(isBbbData.nullable().optional(), {
        description: "Use these settings to override default BigBlueButton settings.",
    }),
    jitsi: extendApi(isJitsiData.nullable().optional(), {
        description: "Use these settings to override default Jitsi settings.",
    }),
});

const isLegalsData = z.object({
    termsOfUseUrl: extendApi(z.string().nullable().optional(), {
        description: "The link to the 'terms of user' page (link displayed on the 'enter your name' scene)",
    }),
    privacyPolicyUrl: extendApi(z.string().nullable().optional(), {
        description: "The link to the 'privacy policy' page (link displayed on the 'enter your name' scene)",
    }),
    cookiePolicyUrl: extendApi(z.string().nullable().optional(), {
        description: "The link to the 'cookie policy' page (link displayed on the 'enter your name' scene)",
    }),
});

const CustomizeSceneData = z.object({
    clothesIcon: extendApi(z.string().nullable().optional(), {
        description: "The URL of the clothes icon",
    }),
    accessoryIcon: extendApi(z.string().nullable().optional(), {
        description: "The URL of the accessory icon",
    }),
    hatIcon: extendApi(z.string().nullable().optional(), {
        description: "The URL of the hat icon",
    }),
    hairIcon: extendApi(z.string().nullable().optional(), {
        description: "The URL of the hair icon",
    }),
    eyesIcon: extendApi(z.string().nullable().optional(), {
        description: "The URL of the eyes icon",
    }),
    bodyIcon: extendApi(z.string().nullable().optional(), {
        description: "The URL of the body icon",
    }),
    turnIcon: extendApi(z.string().nullable().optional(), {
        description: "The URL of the turn icon",
    }),
});

export const isMapDetailsData = z.object({
    mapUrl: extendApi(z.string(), {
        description: "The full URL to the JSON map file",
        example: "https://myuser.github.io/myrepo/map.json",
    }),
    authenticationMandatory: extendApi(z.boolean().nullable().optional(), {
        description: "Whether the authentication is mandatory or not for this map",
        example: true,
    }),
    group: extendApi(z.string().nullable(), {
        description: 'The group this room is part of (maps the notion of "world" in WorkAdventure SAAS)',
        example: "myorg/myworld",
    }),
    mucRooms: extendApi(isMucRoomDefinition.array().nullable(), {
        description: "The MUC room is a room of message",
    }),

    contactPage: extendApi(z.string().nullable().optional(), {
        description: "The URL to the contact page",
        example: "https://mycompany.com/contact-us",
    }),
    iframeAuthentication: extendApi(z.string().nullable().optional(), {
        description: "The URL of the authentication Iframe",
        example: "https://mycompany.com/authc",
    }),
    // The date (in ISO 8601 format) at which the room will expire
    expireOn: extendApi(z.optional(z.string()), {
        description: "The date (in ISO 8601 format) at which the room will expire",
        example: "2022-11-05T08:15:30-05:00",
    }),
    // Whether the "report" feature is enabled or not on this room
    canReport: extendApi(z.boolean().optional(), {
        description: 'Whether the "report" feature is enabled or not on this room',
        example: true,
    }),
    // Whether the "report" feature is enabled or not on this room
    canEdit: extendApi(z.optional(z.boolean()), {
        description: 'Whether the "map editor" feature is enabled or not on this room',
        example: true,
    }),
    loadingCowebsiteLogo: extendApi(z.string().nullable().optional(), {
        description: "The URL of the image to be used on the cowebsite loading page",
        example: "https://example.com/logo.gif",
    }),
    miniLogo: z.string().nullable().optional(),
    // The URL of the logo image on the loading screen
    loadingLogo: extendApi(z.string().nullable().optional(), {
        description: "The URL of the image to be used on the loading page",
        example: "https://example.com/logo.png",
    }),
    // The URL of the logo image on "LoginScene"
    loginSceneLogo: extendApi(z.string().nullable().optional(), {
        description: "The URL of the image to be used on the LoginScene",
        example: "https://example.com/logo_login.png",
    }),
    showPoweredBy: extendApi(z.boolean().nullable().optional(), {
        description: "The URL of the image to be used on the name scene",
        example: "https://example.com/logo_login.png",
    }),
    thirdParty: extendApi(isMapThirdPartyData.nullable().optional(), {
        description: "Configuration data for third party services",
    }),
    metadata: extendApi(z.unknown().optional(), {
        description: "Metadata from administration",
    }),
    roomName: extendApi(z.string().nullable().optional(), {
        description: "The name of the current room.",
        example: "WA Village",
    }),
    pricingUrl: extendApi(z.string().nullable().optional(), {
        description:
            "The url of the page where the user can see the price to upgrade and can use the features he wants in the future.",
        example: "https://example.com/pricing",
    }),
    legals: extendApi(isLegalsData.nullable().optional(), {
        description: "Configuration of the legals link (privacy policy, etc...)",
    }),
    customizeWokaScene: extendApi(CustomizeSceneData.nullable().optional(), {
        description: "Configuration of the 'Customize your Woka' scene (WIP)",
    }),
    backgroundColor: extendApi(z.string().nullable().optional(), {
        description: "The background color used on configuration scenes (enter your name, select a woka, etc...) (WIP)",
        example: "#330033",
    }),
});

export type MapDetailsData = z.infer<typeof isMapDetailsData>;
export type MapThirdPartyData = z.infer<typeof isMapThirdPartyData>;
export type MapBbbData = z.infer<typeof isBbbData>;
export type MapJitsiData = z.infer<typeof isJitsiData>;
export type LegalsData = z.infer<typeof isLegalsData>;
export type CustomizeSceneData = z.infer<typeof CustomizeSceneData>;
