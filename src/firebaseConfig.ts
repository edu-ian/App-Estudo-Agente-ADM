import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { doc, getDocFromServer, getFirestore, type Firestore } from 'firebase/firestore';
import rawConfig from '../firebase-applet-config.json';

export const firebaseConfig = {
  apiKey: rawConfig.apiKey ?? '',
  authDomain: rawConfig.authDomain ?? '',
  projectId: rawConfig.projectId ?? '',
  storageBucket: rawConfig.storageBucket ?? '',
  messagingSenderId: rawConfig.messagingSenderId ?? '',
  appId: rawConfig.appId ?? '',
  firestoreDatabaseId: rawConfig.firestoreDatabaseId ?? '',
};

function hasValidKey(value: string | undefined): boolean {
  if (!value) return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (trimmed.includes('YOUR_') || trimmed.includes('remixed-project-id') || trimmed.includes('MY_')) {
    return false;
  }
  return true;
}

export const isFirebaseConfigured =
  hasValidKey(firebaseConfig.apiKey) &&
  hasValidKey(firebaseConfig.authDomain) &&
  hasValidKey(firebaseConfig.projectId) &&
  hasValidKey(firebaseConfig.appId);

let appInstance: FirebaseApp | null = null;
let authInstance: Auth | null = null;
let dbInstance: Firestore | null = null;

if (isFirebaseConfigured) {
  appInstance = initializeApp({
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    projectId: firebaseConfig.projectId,
    storageBucket: firebaseConfig.storageBucket,
    messagingSenderId: firebaseConfig.messagingSenderId,
    appId: firebaseConfig.appId,
  });

  dbInstance = firebaseConfig.firestoreDatabaseId
    ? getFirestore(appInstance, firebaseConfig.firestoreDatabaseId)
    : getFirestore(appInstance);

  authInstance = getAuth(appInstance);
}

export const firebaseApp = appInstance;
export const auth = authInstance;
export const db = dbInstance;

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const currentUser = authInstance?.currentUser ?? null;
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: currentUser?.uid,
      email: currentUser?.email,
      emailVerified: currentUser?.emailVerified,
      isAnonymous: currentUser?.isAnonymous,
      tenantId: currentUser?.tenantId,
      providerInfo:
        currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) ?? [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

async function testConnection() {
  if (!dbInstance) return;
  try {
    await getDocFromServer(doc(dbInstance, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}

void testConnection();
