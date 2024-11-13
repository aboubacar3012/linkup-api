import { Schema } from 'mongoose';

export const AuthProviderSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  }, // Identifiant de l'utilisateur associé
  provider_name: {
    type: String,
    required: true,
  }, // Nom du fournisseur (ex: 'google', 'facebook')
  provider_user_id: {
    type: String,
    required: true,
  }, // Identifiant de l'utilisateur fourni par le fournisseur
  email: {
    type: String || null,
    default: null,
  }, // Email de l'utilisateur (facultatif)
  password: {
    type: String || null,
    default: null,
  }, // Mot de passe de l'utilisateur (facultatif)
  access_token: {
    type: String,
  }, // Jeton d'accès (facultatif)
  created_at: {
    type: Date,
    default: Date.now,
  }, // Date de création de l’entrée
});
