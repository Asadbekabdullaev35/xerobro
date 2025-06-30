import { BrainCircuit, Users, Calendar, MessageSquare, Share2, Phone, FileText, MessageCircle, UserSearch, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const solutions: Solution[] = [
  {
    icon: BrainCircuit,
    title: 'Leadgenerering',
    description: 'Vår AI hanterar hela leadprocessen åt dig – från personlig första kontakt till färdigt möte.',
    features: [
      'Scrapear webben och berikar leads med personlig data automatiskt',
      'Skickar ut individuellt anpassade introduktioner med personlig data',
      'Notifierar vid hett intresse och följer upp tills bokat möte – helt autonomt'
    ]
  },
  {
    icon: Users,
    title: 'CRM-integration',
    description: 'Smart AI som automatiserar och optimerar hela din kundhantering.',
    features: [
      'Synkar leads automatiskt in i ditt CRM-system',
      'Uppdaterar kontakter, statusar och personlig data i realtid',
      'Ger uppdateringar och påminnelser för nästa steg i säljprocessen'
    ]
  },
  {
    icon: FileText,
    title: 'Offert & Orderflöde',
    description: 'Automatiserad hantering från offert till genomförd order.',
    features: [
      'Skapar offerter automatiskt efter kundförfrågan',
      'Följer upp och anpassar offerter efter kundens behov',
      'Automatiserar hela vägen till orderbekräftelse'
    ]
  },
  {
    icon: Calendar,
    title: 'Smart-bokningar',
    description: 'Intelligent bokningssystem som optimerar din kalender.',
    features: [
      'Länkar möten och andra bokningar mot din kalender och föreslår optimala tider',
      'Undviker dubbelbokningar och tidskonflikter',
      'Skickar påminnelser och ombokningsförslag automatiskt'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Kundsupport',
    description: 'AI-driven kundtjänst som löser ärenden dygnet runt.',
    features: [
      'Hanterar och besvarar inkommande ärenden dygnet runt',
      'Behandlar supportärenden direkt och kvalificerar ärenden och klagomål automatiskt',
      'Eskalerar till människa vid behov'
    ]
  },
  {
    icon: Share2,
    title: 'Sociala Medier',
    description: 'Automatiserad hantering av sociala medier.',
    features: [
      'Skapar och schemalägger inlägg',
      'Följer upp kommentarer och meddelanden',
      'Analyserar engagemang och föreslår förbättringar'
    ]
  },
  {
    icon: Phone,
    title: 'AI-callcenter',
    description: 'Intelligent samtalshantering dygnet runt.',
    features: [
      'Svarar på inkommande samtal med naturlig röst',
      'Identifierar ärendetyp och löser vanliga frågor',
      'Kopplar vidare eller bokar återkoppling vid behov'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Chatbots',
    description: 'Intelligenta chatbots för kundservice och försäljning.',
    features: [
      'Driver konversationer med kunder i realtid',
      'Identifierar behov och vägleder till köp eller support',
      'Integreras i din webbplats eller andra kanaler'
    ]
  },
  {
    icon: UserSearch,
    title: 'Rekrytering',
    description: 'AI-driven rekrytering som effektiviserar hela processen från kandidatsökning till anställning. Vår AI söker, utvärderar och intervjuar kandidater för att hitta den perfekta matchningen för din organisation.',
    features: [
      'Söker upp kandidater baserat på kravprofil',
      'Genomför initiell intervju och kvalificerar kandidater',
      'Skapar profiler för varje kandidat och planerar kvalificerade vidare'
    ]
  },
  {
    icon: Headphones,
    title: 'Säljcoach',
    description: 'AI som analyserar säljsamtal och ger konkret feedback.',
    features: [
      'Lyssnar på och transkriberar säljsamtal',
      'Identifierar brister och förbättringsområden',
      'Ger konkret feedback och mäter förbättring över tid'
    ]
  }
];