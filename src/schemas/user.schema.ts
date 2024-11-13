import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  }, // Prénom de l'utilisateur
  last_name: {
    type: String,
    required: true,
  }, // Nom de famille de l'utilisateur
  date_of_birth: {
    type: Date,
  }, // Date de naissance
  email: {
    type: String,
    required: true,
    unique: true,
  }, // Adresse email unique
  profile_picture_url: {
    type: String,
  }, // URL de la photo de profil
  description: {
    type: String,
  }, // Description
  interests: {
    type: [String],
  }, // Centres d'intérêt
  phone: {
    type: String,
  }, // Numéro de téléphone
  company: {
    type: String,
  }, // Société
  social_links: [
    {
      platform: String,
      url: String,
    },
  ], // Liens sociaux
  skills: {
    type: [String],
  }, // Compétences
  created_at: {
    type: Date,
    default: Date.now,
  }, // Date de création du compte
  updated_at: {
    type: Date,
    default: Date.now,
  }, // Dernière mise à jour
});
