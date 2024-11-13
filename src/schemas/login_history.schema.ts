import { Schema } from 'mongoose';

export const LoginHistorySchema = new Schema({
  user_id: {
    type: String,
    required: true,
  }, // Identifiant de l'utilisateur
  provider_name: {
    type: String,
    required: true,
  }, // Nom du fournisseur utilisé pour la connexion
  login_timestamp: {
    type: Date,
    default: Date.now,
  }, // Horodatage de la connexion
});
