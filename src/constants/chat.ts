import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions, ModelMaxToken  } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are ChatGPT, a large language model trained by OpenAI.
Carefully heed the user's instructions. 
Respond using Markdown.`;

export const modelOptions: ModelOptions[] = [
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-16k',
  'gpt-4',
  'gpt-4-32k',
  // 'gpt-3.5-turbo-0301',
  // 'gpt-4-0314',
  // 'gpt-4-32k-0314',
  'huggingfaceh4/zephyr-7b-beta',
  'mistralai/mistral-7b-instruct',
  'openai/gpt-3.5-turbo-instruct',
  'google/palm-2-chat-bison',
  'google/palm-2-codechat-bison',
  'google/palm-2-chat-bison-32k',
  'google/palm-2-codechat-bison-32k',
  'meta-llama/llama-2-13b-chat',
  'meta-llama/llama-2-70b-chat',
  'nousresearch/nous-hermes-llama2-13b',
  'nousresearch/nous-hermes-llama2-70b',
  'meta-llama/codellama-34b-instruct',
  'phind/phind-codellama-34b',
  'jondurbin/airoboros-l2-70b',
  'migtissera/synthia-70b',
  'open-orca/mistral-7b-openorca',
  'teknium/openhermes-2-mistral-7b',
  'pygmalionai/mythalion-13b',
  'undi95/remm-slerp-l2-13b',
  'gryphe/mythomax-l2-13b',
  'xwin-lm/xwin-lm-70b',
  'gryphe/mythomax-l2-13b-8k',
  'anthropic/claude-2',
  'anthropic/claude-instant-v1',
  'mancer/weaver',
];

export const defaultModel = 'gpt-3.5-turbo';

export const modelMaxToken: ModelMaxToken = {
  'gpt-3.5-turbo': 4096,
  'gpt-3.5-turbo-0301': 4096,
  'gpt-3.5-turbo-0613': 4096,
  'gpt-3.5-turbo-16k': 16384,
  'gpt-3.5-turbo-16k-0613': 16384,
  'gpt-4': 8192,
  'gpt-4-0314': 8192,
  'gpt-4-0613': 8192,
  'gpt-4-32k': 32768,
  'gpt-4-32k-0314': 32768,
  'gpt-4-32k-0613': 32768,
  'huggingfaceh4/zephyr-7b-beta': 4096,
  'mistralai/mistral-7b-instruct': 8192,
  'openai/gpt-3.5-turbo-instruct': 4096,
  'google/palm-2-chat-bison': 9216,
  'google/palm-2-codechat-bison': 7168,
  'google/palm-2-chat-bison-32k': 32000,
  'google/palm-2-codechat-bison-32k': 32000,
  'meta-llama/llama-2-13b-chat': 4096,
  'meta-llama/llama-2-70b-chat': 4096,
  'nousresearch/nous-hermes-llama2-13b': 4096,
  'nousresearch/nous-hermes-llama2-70b': 4096,
  'meta-llama/codellama-34b-instruct': 8192,
  'phind/phind-codellama-34b': 4096,
  'jondurbin/airoboros-l2-70b': 4096,
  'migtissera/synthia-70b': 8192,
  'open-orca/mistral-7b-openorca': 8192,
  'teknium/openhermes-2-mistral-7b': 4096,
  'pygmalionai/mythalion-13b': 8192,
  'undi95/remm-slerp-l2-13b': 6144,
  'gryphe/mythomax-l2-13b': 4096,
  'xwin-lm/xwin-lm-70b': 8192,
  'gryphe/mythomax-l2-13b-8k': 8192,
  'anthropic/claude-2': 100000,
  'anthropic/claude-instant-v1': 100000,
  'mancer/weaver': 8000,
};

export const modelCost = {
  'gpt-3.5-turbo': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-3.5-turbo-0301': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-3.5-turbo-0613': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-3.5-turbo-16k': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.004, unit: 1000 },
  },
  'gpt-3.5-turbo-16k-0613': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.004, unit: 1000 },
  },
  'gpt-4': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'gpt-4-0314': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'gpt-4-0613': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'gpt-4-32k': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'gpt-4-32k-0314': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'gpt-4-32k-0613': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'gpt-3.5-turbo-instruct': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'huggingfaceh4/zephyr-7b-beta': {
    prompt: { price: 0, unit: 1000 },
    completion: { price: 0, unit: 1000 },
  },
  'mistralai/mistral-7b-instruct': {
    prompt: { price: 0, unit: 1000 },
    completion: { price: 0, unit: 1000 },
  },
  'google/palm-2-chat-bison': {
    prompt: { price: 0.0005, unit: 1000 },
    completion: { price: 0.0005, unit: 1000 },
  },
  'google/palm-2-codechat-bison': {
    prompt: { price: 0.0005, unit: 1000 },
    completion: { price: 0.0005, unit: 1000 },
  },
  'google/palm-2-chat-bison-32k': {
    prompt: { price: 0.0005, unit: 1000 },
    completion: { price: 0.0005, unit: 1000 },
  },
  'google/palm-2-codechat-bison-32k': {
    prompt: { price: 0.0005, unit: 1000 },
    completion: { price: 0.0005, unit: 1000 },
  },
  'meta-llama/llama-2-13b-chat': {
    prompt: { price: 0.00025, unit: 1000 },
    completion: { price: 0.00025, unit: 1000 },
  },
  'meta-llama/llama-2-70b-chat': {
    prompt: { price: 0.001, unit: 1000 },
    completion: { price: 0.001, unit: 1000 },
  },
  'nousresearch/nous-hermes-llama2-13b': {
    prompt: { price: 0.00025, unit: 1000 },
    completion: { price: 0.00025, unit: 1000 },
  },
  'nousresearch/nous-hermes-llama2-70b': {
    prompt: { price: 0.001, unit: 1000 },
    completion: { price: 0.001, unit: 1000 },
  },
  'meta-llama/codellama-34b-instruct': {
    prompt: { price: 0.00045, unit: 1000 },
    completion: { price: 0.00045, unit: 1000 },
  },
  'phind/phind-codellama-34b': {
    prompt: { price: 0.0004, unit: 1000 },
    completion: { price: 0.0004, unit: 1000 },
  },
  'jondurbin/airoboros-l2-70b': {
    prompt: { price: 0.0007, unit: 1000 },
    completion: { price: 0.00095, unit: 1000 },
  },
  'migtissera/synthia-70b': {
    prompt: { price: 0.009375, unit: 1000 },
    completion: { price: 0.009375, unit: 1000 },
  },
  'open-orca/mistral-7b-openorca': {
    prompt: { price: 0.0002, unit: 1000 },
    completion: { price: 0.0002, unit: 1000 },
  },
  'teknium/openhermes-2-mistral-7b': {
    prompt: { price: 0.0002, unit: 1000 },
    completion: { price: 0.0002, unit: 1000 },
  },
  'pygmalionai/mythalion-13b': {
    prompt: { price: 0.001125, unit: 1000 },
    completion: { price: 0.001125, unit: 1000 },
  },
  'undi95/remm-slerp-l2-13b': {
    prompt: { price: 0.001125, unit: 1000 },
    completion: { price: 0.001125, unit: 1000 },
  },
  'gryphe/mythomax-l2-13b': {
    prompt: { price: 0.0008, unit: 1000 },
    completion: { price: 0.0008, unit: 1000 },
  },
  'xwin-lm/xwin-lm-70b': {
    prompt: { price: 0.009375, unit: 1000 },
    completion: { price: 0.009375, unit: 1000 },
  },
  'gryphe/mythomax-l2-13b-8k': {
    prompt: { price: 0.001125, unit: 1000 },
    completion: { price: 0.001125, unit: 1000 },
  },
  'anthropic/claude-2': {
    prompt: { price: 0.01102, unit: 1000 },
    completion: { price: 0.03268, unit: 1000 },
  },
  'anthropic/claude-instant-v1': {
    prompt: { price: 0.00163, unit: 1000 },
    completion: { price: 0.00551, unit: 1000 },
  },
  'mancer/weaver': {
    prompt: { price: 0.0045, unit: 1000 },
    completion: { price: 0.0045, unit: 1000 },
  },
};

export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
